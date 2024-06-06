import type { UserStoreStateInterface } from "../../interface/store/user/user-store-state.interface";
import { usePostStore } from "../post";
import type { CommentInterface } from "~/interface/entity/comment/comment.interface";
import type { ReplyInterface } from "~/interface/entity/reply/reply.interface";
import type { FollowInterface } from "~/interface/entity/follow/follow.interface";
export const useUserStore = defineStore("user", {
  state: (): UserStoreStateInterface => {
    return {
      id: 0,
      email: "",
      image: "",
      name: "",
      bio: "",
      videos: [],
      postSelected: null,
      following: [],
      follower: [],
      prefer: 0,
      favorite: [],
      liked: [],
    };
  },
  actions: {
    setUser(user: UserStoreStateInterface) {
      this.id = user.id;
      this.email = user.email;
      this.image = user.image;
      this.name = user.name;
      this.bio = user.bio;
      this.videos = user.videos;
      this.postSelected = user.postSelected;
      this.following = user.following;
      this.follower = user.follower;
      this.prefer = user.prefer;
      this.favorite = user.favorite;
      this.liked = user.liked;
    },
    resetUSer() {
      this.id = 0;
      this.email = "";
      this.image = "";
      this.name = "";
      this.bio = "";
      this.videos = [];
      this.postSelected = null;
      this.following = [];
      this.follower = [];
      this.prefer = 0;
      this.favorite = [];
      this.liked = [];
    },
    addComment(comment: CommentInterface) {
      usePostStore().postSelected?.comments.unshift(comment);
    },
    deleteComment(commentId: number) {
      usePostStore().postSelected?.comments.forEach((comment, index) => {
        comment.id === commentId ? usePostStore().postSelected?.comments.splice(index, 1) : "";
      });
    },
    addReply(reply: ReplyInterface, commentId: number) {
      usePostStore().postSelected?.comments.forEach((comment) => {
        comment.id === commentId ? comment.replies?.unshift(reply) : "";
      });
    },
    deleteReply(replyId: number) {
      usePostStore().postSelected?.comments.forEach((comment) => {
        comment.replies?.forEach((reply, index) => {
          reply.id === replyId ? comment.replies?.splice(index, 1) : "";
        });
      });
    },
    follow(follow: FollowInterface) {
      this.following.push(follow);
    },
    unFollow(creatorId: number) {
      const index = this.following.findIndex((item) => item.idUserCreator === creatorId);
      this.following.splice(index, 1);
    },
    deletePost(postId: number) {
      const index = this.videos?.findIndex((post) => post.id === postId);
      this.videos?.splice(index!, 1);
    },
  },
});
