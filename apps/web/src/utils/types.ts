export type IdeaDataType =
    | {
          id: string;
          user_id: number;
          title?: string;
          description?: string;
      }
    | undefined;

export type ParticipantDataType = {
    id: number;
    idea_id: string;
    user_id: number | null;
    email: string;
    state: string;
};
