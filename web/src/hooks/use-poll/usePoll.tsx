import { createContext, PropsWithChildren, useContext, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

import { PollContextProps, PollProviderProps } from "./types";
import { Poll } from "@/types/poll";
import PollAPI from "@/lib/api/poll/PollAPI";

const PollContext = createContext<PollContextProps>({
  id: undefined,
  isUpdatePage: false,
  poll: null,
  update: () => new Promise(() => {}),
});

export const usePollContext = () => useContext(PollContext);

const PollProvider: React.FC<PropsWithChildren<PollProviderProps>> = ({
  children,
  id,
  isUpdatePage,
}) => {
  const { data, refetch } = useQuery<Poll>({
    queryKey: ["poll", id],
    queryFn: () => PollAPI.getPoll(id!),
    refetchOnWindowFocus: false,
    retry: false,
    enabled: !!id,
  });

  const context: PollContextProps = useMemo(
    () => ({
      id,
      isUpdatePage,
      poll: data as Poll,
      update: async () => {
        await refetch();
      },
    }),
    [data, id, refetch, isUpdatePage]
  );

  return (
    <PollContext.Provider value={context}>{children}</PollContext.Provider>
  );
};

export default PollProvider;
