export type IdeaDataType =
    | {
          id: string;
          user_id: number;
          title?: string;
          description?: string;
      }
    | undefined;
