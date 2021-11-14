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
  id: number | string;
  rating: number;
  user: ReviewUser;
};

export type ReviewPost = {
  comment: string;
  rating: number;
};
