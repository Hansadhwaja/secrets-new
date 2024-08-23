'use server'

import Secret from "../models/secret.model";
import User from "../models/user.model";
import ConnectToDB from "../mongoose";
import { revalidatePath } from "next/cache";

ConnectToDB();

export async function fetchSecret({ author }) {
  try {
    const user = await User.findOne({ userId: author });
    const secrets = await Secret.find({ author: user._id });
    return secrets;

  } catch (error) {
    throw new Error(`Error while fetching Thread:${error.message}`)
  }

}

export async function fetchAllSecret() {
  try {
    const secrets = await Secret.find({});
    return secrets;

  } catch (error) {
    throw new Error(`Error while fetching All Secret:${error.message}`)
  }

}

export async function editSecret({ description, id }) {
  console.log(description);

  try {
    await Secret.findByIdAndUpdate({ _id: id }, { description: description });
    return { message: 'Edited Successfully' }

  } catch (error) {
    throw new Error(`Error while fetching All Secret:${error.message}`)
  }

}

export async function deleteSecret({ id, author }) {

  try {
    const user = await User.findOne({ userId: author });
    user.secrets.pull(id);
    await user.save();
    await Secret.findByIdAndDelete(id);
    revalidatePath('/mysecrets')

  } catch (error) {
    throw new Error(`Error while fetching All Secret:${error.message}`)
  }

}

export async function createSecret({ author, description }) {

  try {
    const secret = await Secret.create({ author, description });
    const user = await User.findById(author);
    user.secrets.push(secret._id);
    await user.save();
    return {message:'Secret Created Successfully'}
  } catch (error) {
    throw new Error(`Error while fetching All Secret:${error.message}`)
  }

}