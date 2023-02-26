import localforage from 'localforage'

type LocalForage = typeof localforage & {
  setItem: typeof setItem
}

interface StoreData {
  value?: any
  expiryTime?: number
  createTime: number
}

const getItem = async (key: string) => {
  const data = await localforage.getItem<StoreData>(key)
  if (!data) return null

  if (data.expiryTime && Date.now() - data.createTime > data.expiryTime) {
    localforage.removeItem(key)
    return null
  }

  return data.value
}

const setItem = async (key: string, value?: any, expiryTime?: number) => {
  await localforage.setItem<StoreData>(key, {
    value,
    expiryTime,
    createTime: Date.now(),
  })

  return value
}

const localforageExtension = {
  ...localforage,
  getItem,
  setItem,
} as LocalForage

export default localforageExtension
