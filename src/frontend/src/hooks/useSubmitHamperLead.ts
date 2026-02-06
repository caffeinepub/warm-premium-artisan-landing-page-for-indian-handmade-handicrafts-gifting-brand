import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { HamperLead } from '../backend';

export function useSubmitHamperLead() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (lead: HamperLead) => {
      if (!actor) throw new Error('Actor not available');
      return actor.submitHamperLead(lead);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leads'] });
    },
  });
}

