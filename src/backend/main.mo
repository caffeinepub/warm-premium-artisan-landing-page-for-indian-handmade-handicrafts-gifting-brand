import Array "mo:core/Array";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  public type HamperLead = {
    name : Text;
    email : Text;
    phone : ?Text;
    occasionType : Text;
    budgetRange : Text;
    preferredItems : Text;
    quantity : Nat;
    deliveryLocation : Text;
    notes : ?Text;
  };

  public type UserProfile = {
    name : Text;
  };

  var leads = Array.empty<HamperLead>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  // Initialize the user system state
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User profile management functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Lead submission - open to all users including guests (no authorization check needed)
  public shared ({ caller }) func submitHamperLead(lead : HamperLead) : async () {
    // Validate required fields
    if (lead.name.isEmpty()) { Runtime.trap("Name is required") };
    if (lead.email.isEmpty()) { Runtime.trap("Email is required") };
    if (lead.occasionType.isEmpty()) { Runtime.trap("Occasion type is required") };
    if (lead.budgetRange.isEmpty()) { Runtime.trap("Budget range is required") };
    if (lead.preferredItems.isEmpty()) { Runtime.trap("Preferred items are required") };
    if (lead.quantity == 0) { Runtime.trap("Quantity must be greater than 0") };
    if (lead.deliveryLocation.isEmpty()) { Runtime.trap("Delivery location is required") };

    // Add new lead to the leads array
    leads := leads.concat([lead]);
  };

  // Admin-only access to view all leads
  public query ({ caller }) func getAllLeads() : async [HamperLead] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can access leads");
    };
    leads;
  };
};
