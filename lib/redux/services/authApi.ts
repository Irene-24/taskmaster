import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  verifyPasswordResetCode,
} from "firebase/auth";

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

import { auth, db } from "@/firebase/config";

import { baseApi } from "./base";

import { CreateUserDTO, LoginUserDTO } from "@/types/requests.types";
import {} from "@/types/responses.types";
import { AppUser } from "@/types/models.types";
import { COLLECTIONS } from "@/constants/collections";

const authApiApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation<AppUser, CreateUserDTO>({
      queryFn: async ({ firstName, lastName, password, email }) => {
        try {
          const result = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );

          const body: Omit<AppUser, "id"> = {
            firstName,
            lastName,
            avatarUrl: "",
            email,
            createdAt: new Date().toISOString(),
          };

          await setDoc(doc(db, COLLECTIONS.USERS, result.user.uid), body);

          return {
            data: { ...body, id: result.user.uid },
          };
        } catch (e: any) {
          return {
            error: {
              message: e?.message || "Could not create user profile",
            },
          };
        }
      },
    }),
    login: build.mutation<any, LoginUserDTO>({
      queryFn: async ({ password, email }) => {
        try {
          const result = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );

          return {
            data: { id: result.user.uid },
          };
        } catch (e: any) {
          return {
            error: {
              message: e?.message || "Could not login user",
            },
          };
        }
      },
    }),
    logout: build.mutation<any, void>({
      queryFn: async () => {
        try {
          await signOut(auth);

          return { data: { message: "success" } };
        } catch (e: any) {
          return {
            error: {
              message: e?.message || "Could not logout user",
            },
          };
        }
      },
    }),
  }),
  overrideExisting: true,
});
export const { useSignUpMutation, useLoginMutation, useLogoutMutation } =
  authApiApi;
export { authApiApi };
