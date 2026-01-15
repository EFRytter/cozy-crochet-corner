import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://indmjyvsiqdcwssfmdjt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImluZG1qeXZzaXFkY3dzc2ZtZGp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg1MDM3NjUsImV4cCI6MjA4NDA3OTc2NX0.WO5GoV1gSv7_Y9TauR6J4B26RKBOgJjQjmhATiGD5Ug'
const supabase = createClient(supabaseUrl, supabaseKey)

type User = { email: string; id: string }
type AuthContextType = { user: User | null; signUp: (email: string, password: string) => Promise<boolean>; signIn: (email: string, password: string) => Promise<boolean>; logout: () => Promise<void> }

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ? { email: session.user.email!, id: session.user.id } : null)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ? { email: session.user.email!, id: session.user.id } : null)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({ email, password })
    return !error
  }

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    return !error
  }

  const logout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)!
