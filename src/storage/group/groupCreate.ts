import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";

export async function GroupCreate(newGroup: string) {
  try {
    const storaedGroup = await groupsGetAll();

    const storage = JSON.stringify([...storaedGroup, newGroup]);
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
