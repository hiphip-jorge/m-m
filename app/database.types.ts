export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Photo: {
        Row: {
          id: number
          name: string
          path: string
          photoshoot_name: string | null
          tags: string[] | null
          upload_date: string
        }
        Insert: {
          id?: number
          name: string
          path: string
          photoshoot_name?: string | null
          tags?: string[] | null
          upload_date?: string
        }
        Update: {
          id?: number
          name?: string
          path?: string
          photoshoot_name?: string | null
          tags?: string[] | null
          upload_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "Photo_photoshoot_name_fkey"
            columns: ["photoshoot_name"]
            referencedRelation: "Photoshoot"
            referencedColumns: ["name"]
          }
        ]
      }
      Photoshoot: {
        Row: {
          id: number
          initial_date: string
          name: string
        }
        Insert: {
          id?: number
          initial_date?: string
          name: string
        }
        Update: {
          id?: number
          initial_date?: string
          name?: string
        }
        Relationships: []
      }
      Tags: {
        Row: {
          id: number
          name: string
          photo_paths: string[] | null
        }
        Insert: {
          id?: number
          name: string
          photo_paths?: string[] | null
        }
        Update: {
          id?: number
          name?: string
          photo_paths?: string[] | null
        }
        Relationships: []
      }
      User: {
        Row: {
          created_at: string
          email: string | null
          is_admin: boolean
          name: string
          password: string
          photoshoot_id: number | null
          user_id: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          is_admin?: boolean
          name: string
          password: string
          photoshoot_id?: number | null
          user_id?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          is_admin?: boolean
          name?: string
          password?: string
          photoshoot_id?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "User_photoshoot_id_fkey"
            columns: ["photoshoot_id"]
            referencedRelation: "Photoshoot"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
