import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// export const getPosts = async () => {
//   try {
//     connectToDb();
//     const posts = await Post.find();
//     return posts;
//   } catch (err) {
//     console.log(err);
//     throw new Error("Fail to fetch posts!");
//   }
// };

// export const getPost = async (slug) => {
//   noStore();
//   try {
//     connectToDb();
//     const post = await Post.findOne({ slug });
//     return post;
//   } catch (err) {
//     console.log(err);
//     throw new Error("Fail to fetch post!");
//   }
// };

// export const getUser = async (id) => {
//   try {
//     connectToDb();
//     const user = await User.findById(id);
//     return user;
//   } catch (err) {
//     console.log(err);
//     throw new Error("Fail to fetch user!");
//   }
// };

// export const getUsers = async (id) => {
//   try {
//     connectToDb();
//     const users = await User.find();
//     return users;
//   } catch (err) {
//     console.log(err);
//     throw new Error("Fail to fetch users!");
//   }
// };