import type { PeopleResponseInterface } from "~/interface/response/people/people-response.inteface";
import type { PostResponseInterface } from "~/interface/response/post/post-response.interface";
import type { PeopleStoreStateInterface } from "~/interface/store/people/profile-store-state.interface";

export const usePeopleStore = defineStore("people", {
  state: (): PeopleStoreStateInterface => {
    return {
      id: 0,
      image: "",
      name: "",
      bio: "",
      videos: [],
      postSelected: null,
      following: [],
      follower: [],
      prefer: 0,
      liked: [],
      favorite: [],
      isWatching: false,
      status: 0,
    };
  },
  getters: {
    totalPost: (state): number => {
      return state.videos!.length;
    },
  },
  actions: {
    setInfoPersonal(personalInfo: PeopleResponseInterface) {
      this.id = personalInfo.id;
      this.image = personalInfo.image;
      this.name = personalInfo.name;
      this.bio = personalInfo.bio;
      this.videos = personalInfo.videos;
      this.postSelected = personalInfo.postSelected;
      this.following = personalInfo.following;
      this.follower = personalInfo.follower;
      this.prefer = personalInfo.prefer;
      this.liked = personalInfo.liked;
      this.favorite = personalInfo.favorite;
    },
    setPostSelected(post: PostResponseInterface | null) {
      this.postSelected = post;
    },
    setStatus(status: number) {
      this.status = status;
    },
  },
});
