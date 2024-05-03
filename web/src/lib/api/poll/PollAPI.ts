import { Poll } from "@/types/poll";
import { client } from "../instance";
import { getAuthorizationHeader } from "../utils";
import { HaveVoted } from "./types/HaveVoted";
import { OptionResults } from "./types/PollResults";
import { UpdatePollBody } from "./types/UpdatePollBody";
import { CreatePollBody } from "./types/CreatePollBody";

class PollAPI {
  async getPolls() {
    const { data } = await client.get<Poll[]>("/polls");
    return data;
  }

  async getPoll(pollId: string) {
    const { data } = await client.get<Poll>(`/polls/${pollId}`);
    return data;
  }

  async createPoll(body: CreatePollBody) {
    const { data } = await client.post<Poll>(
      "/polls",
      body,
      getAuthorizationHeader()
    );
    return data;
  }

  async haveVoted(pollId: string) {
    const { data } = await client.get<HaveVoted>(
      `/polls/${pollId}/have-voted`,
      getAuthorizationHeader()
    );
    return data;
  }

  async getResults(pollId: string) {
    const { data } = await client.get<OptionResults[]>(
      `/polls/${pollId}/results`
    );
    return data;
  }

  async updatePoll(pollId: string, body: UpdatePollBody) {
    const { data } = await client.patch(
      `/polls/${pollId}`,
      body,
      getAuthorizationHeader()
    );
    return data;
  }

  async vote(pollId: string, optionId: string) {
    const { data } = await client.post(
      `/polls/${pollId}/vote/${optionId}`,
      {},
      getAuthorizationHeader()
    );
    return data;
  }

  async delete(pollId: string) {
    await client.delete(`/polls/${pollId}`, getAuthorizationHeader());
  }
}

export default new PollAPI();
