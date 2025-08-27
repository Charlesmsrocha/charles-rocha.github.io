import { supabase } from './supabaseClient.js'

export async function signUp(email, password) {
  return await supabase.auth.signUp({ email, password })
}

export async function logIn(email, password) {
  return await supabase.auth.signInWithPassword({ email, password })
}

export async function logOut() {
  return await supabase.auth.signOut()
}

export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}
