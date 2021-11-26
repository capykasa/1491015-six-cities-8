type ReviewUser = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type Review = {
  comment: string | null;
  date: string;
  id: number;
  rating: number;
  user: ReviewUser;
};

export type ReviewPost = {
  comment: string;
  rating: number;
};
