export type IdeaDataType =
    | {
          id: string;
          user_id: string;
          title: string;
          description: string | null;
          publish_date: string | null;
      }
    | undefined;

export type ParticipantDataType = {
    id: number;
    idea_id: string;
    user_id: string | null;
    email: string;
    state: string;
};
