type ReviewUser = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type ReviewComment = {
  comment: string | null;
};

export type ReviewRating = {
  rating: number;
};

export type Review = {
  comment: string | null;
  date: string;
  id: number;
  rating: number;
  user: ReviewUser;
};
