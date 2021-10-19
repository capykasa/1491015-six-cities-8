type ReviewUser = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type Reviews = {
  comment: string | null;
  date: string;
  id: number;
  rating: number;
  user: ReviewUser;
};
