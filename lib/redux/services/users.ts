import {
  doc,
  setDoc,
  getDoc,
  query,
  collection,
  where,
  onSnapshot,
  documentId,
  updateDoc,
} from "firebase/firestore";

import { baseApi } from "./base";
import {} from "@/types/requests.types";
import {} from "@/types/responses.types";

import { AppUser } from "@/types/models.types";
import { COLLECTIONS } from "@/constants/collections";
import { db } from "@/firebase/config";

const usersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUserById: build.query<AppUser, string>({
      queryFn: async (userId) => {
        try {
          const docSnap = await getDoc(doc(db, COLLECTIONS.USERS, userId));

          if (docSnap.exists()) {
            const result = { id: userId, ...docSnap.data() } as AppUser;
            return { data: result };
          } else {
            throw new Error("Unable to load profile");
          }
        } catch (error: any) {
          return { error };
        }
      },

      async onCacheEntryAdded(
        userId,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        let unsubscribe = () => {};

        try {
          await cacheDataLoaded;

          const userDocRef = doc(db, COLLECTIONS.USERS, userId);

          unsubscribe = onSnapshot(
            userDocRef,
            (snapshot) => {
              const data = snapshot.data();
              if (data) {
                const updatedUser = {
                  id: userId,
                  ...data,
                } as AppUser;

                updateCachedData((draft) => {
                  Object.assign(draft, updatedUser);
                });
              }
            },
            (error) => {
              console.error("Error fetching user data:", error);
            }
          );
        } catch (error) {
          console.error("Error in onCacheEntryAdded:", error);
        }

        await cacheEntryRemoved;
        unsubscribe();
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetUserByIdQuery, useLazyGetUserByIdQuery } = usersApi;
export { usersApi };
