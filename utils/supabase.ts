
import 'react-native-url-polyfill/auto'
// import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient, processLock } from '@supabase/supabase-js'

export const supabase = createClient(
  // Don't forget to create .env.local for connect to supabase
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.EXPO_PUBLIC_SUPABASE_KEY!,  
  {
    auth: {
      // storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
      lock: processLock,
    },
  })

  // I disabled async-storage to provide access to the website platform.
  // So it's not just for mobile devices.
  // If you want to use async-storage, please uncomment the import line and the storage line above.
        