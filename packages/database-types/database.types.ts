export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      tb_answer: {
        Row: {
          answered_at: string
          id_answer: number
          id_question: number
          id_result: number
          score: number
        }
        Insert: {
          answered_at?: string
          id_answer?: number
          id_question: number
          id_result: number
          score: number
        }
        Update: {
          answered_at?: string
          id_answer?: number
          id_question?: number
          id_result?: number
          score?: number
        }
        Relationships: [
          {
            foreignKeyName: "tb_answer_id_question_fkey"
            columns: ["id_question"]
            isOneToOne: false
            referencedRelation: "tb_question"
            referencedColumns: ["id_question"]
          },
          {
            foreignKeyName: "tb_answer_id_result_fkey"
            columns: ["id_result"]
            isOneToOne: false
            referencedRelation: "tb_assessment_result"
            referencedColumns: ["id_result"]
          },
        ]
      }
      tb_appointment: {
        Row: {
          appointment_date: string
          appointment_time: string
          created_at: string
          created_by: string | null
          id_appointment: number
          id_doctor: number
          id_elderly: number
          id_hospital: number
          reason: string | null
          status: Database["public"]["Enums"]["appointment_status_enum"]
        }
        Insert: {
          appointment_date: string
          appointment_time: string
          created_at?: string
          created_by?: string | null
          id_appointment?: number
          id_doctor: number
          id_elderly: number
          id_hospital: number
          reason?: string | null
          status?: Database["public"]["Enums"]["appointment_status_enum"]
        }
        Update: {
          appointment_date?: string
          appointment_time?: string
          created_at?: string
          created_by?: string | null
          id_appointment?: number
          id_doctor?: number
          id_elderly?: number
          id_hospital?: number
          reason?: string | null
          status?: Database["public"]["Enums"]["appointment_status_enum"]
        }
        Relationships: [
          {
            foreignKeyName: "tb_appointment_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "tb_profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tb_appointment_id_doctor_fkey"
            columns: ["id_doctor"]
            isOneToOne: false
            referencedRelation: "tb_doctor"
            referencedColumns: ["id_doctor"]
          },
          {
            foreignKeyName: "tb_appointment_id_elderly_fkey"
            columns: ["id_elderly"]
            isOneToOne: false
            referencedRelation: "tb_elderly"
            referencedColumns: ["id_elderly"]
          },
        ]
      }
      tb_appointment_summary: {
        Row: {
          created_at: string
          diagnosis: string | null
          id_appointment: number
          id_doctor: number
          id_elderly: number
          id_summary: number
          note: string | null
          symptom: string | null
          treatment: string | null
        }
        Insert: {
          created_at?: string
          diagnosis?: string | null
          id_appointment: number
          id_doctor: number
          id_elderly: number
          id_summary?: number
          note?: string | null
          symptom?: string | null
          treatment?: string | null
        }
        Update: {
          created_at?: string
          diagnosis?: string | null
          id_appointment?: number
          id_doctor?: number
          id_elderly?: number
          id_summary?: number
          note?: string | null
          symptom?: string | null
          treatment?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tb_appointment_summary_id_appointment_fkey"
            columns: ["id_appointment"]
            isOneToOne: true
            referencedRelation: "tb_appointment"
            referencedColumns: ["id_appointment"]
          },
          {
            foreignKeyName: "tb_appointment_summary_id_doctor_fkey"
            columns: ["id_doctor"]
            isOneToOne: false
            referencedRelation: "tb_doctor"
            referencedColumns: ["id_doctor"]
          },
          {
            foreignKeyName: "tb_appointment_summary_id_elderly_fkey"
            columns: ["id_elderly"]
            isOneToOne: false
            referencedRelation: "tb_elderly"
            referencedColumns: ["id_elderly"]
          },
        ]
      }
      tb_assessment: {
        Row: {
          assessment_name: string
          category: Database["public"]["Enums"]["assessment_category_enum"]
          created_at: string
          description: string | null
          id_assessment: number
          status: Database["public"]["Enums"]["assessment_status_enum"]
        }
        Insert: {
          assessment_name: string
          category: Database["public"]["Enums"]["assessment_category_enum"]
          created_at?: string
          description?: string | null
          id_assessment?: number
          status?: Database["public"]["Enums"]["assessment_status_enum"]
        }
        Update: {
          assessment_name?: string
          category?: Database["public"]["Enums"]["assessment_category_enum"]
          created_at?: string
          description?: string | null
          id_assessment?: number
          status?: Database["public"]["Enums"]["assessment_status_enum"]
        }
        Relationships: []
      }
      tb_assessment_result: {
        Row: {
          created_at: string
          id_assessment: number
          id_elderly: number
          id_result: number
          result_level: Database["public"]["Enums"]["assessment_result_level_enum"]
          total_score: number
        }
        Insert: {
          created_at?: string
          id_assessment: number
          id_elderly: number
          id_result?: number
          result_level: Database["public"]["Enums"]["assessment_result_level_enum"]
          total_score?: number
        }
        Update: {
          created_at?: string
          id_assessment?: number
          id_elderly?: number
          id_result?: number
          result_level?: Database["public"]["Enums"]["assessment_result_level_enum"]
          total_score?: number
        }
        Relationships: [
          {
            foreignKeyName: "tb_assessment_result_id_assessment_fkey"
            columns: ["id_assessment"]
            isOneToOne: false
            referencedRelation: "tb_assessment"
            referencedColumns: ["id_assessment"]
          },
          {
            foreignKeyName: "tb_assessment_result_id_elderly_fkey"
            columns: ["id_elderly"]
            isOneToOne: false
            referencedRelation: "tb_elderly"
            referencedColumns: ["id_elderly"]
          },
        ]
      }
      tb_assessment_score_range: {
        Row: {
          id_assessment: number
          id_range: number
          label: string
          max_score: number
          min_score: number
          result_level: Database["public"]["Enums"]["assessment_result_level_enum"]
        }
        Insert: {
          id_assessment: number
          id_range?: number
          label: string
          max_score: number
          min_score: number
          result_level: Database["public"]["Enums"]["assessment_result_level_enum"]
        }
        Update: {
          id_assessment?: number
          id_range?: number
          label?: string
          max_score?: number
          min_score?: number
          result_level?: Database["public"]["Enums"]["assessment_result_level_enum"]
        }
        Relationships: [
          {
            foreignKeyName: "tb_assessment_score_range_id_assessment_fkey"
            columns: ["id_assessment"]
            isOneToOne: false
            referencedRelation: "tb_assessment"
            referencedColumns: ["id_assessment"]
          },
        ]
      }
      tb_assignment: {
        Row: {
          assigned_at: string
          assigned_by: string | null
          id_assignment: number
          id_doctor: number
          id_elderly: number
          id_hospital: number
          status: Database["public"]["Enums"]["assignment_status_enum"]
        }
        Insert: {
          assigned_at?: string
          assigned_by?: string | null
          id_assignment?: number
          id_doctor: number
          id_elderly: number
          id_hospital: number
          status?: Database["public"]["Enums"]["assignment_status_enum"]
        }
        Update: {
          assigned_at?: string
          assigned_by?: string | null
          id_assignment?: number
          id_doctor?: number
          id_elderly?: number
          id_hospital?: number
          status?: Database["public"]["Enums"]["assignment_status_enum"]
        }
        Relationships: [
          {
            foreignKeyName: "tb_assignment_assigned_by_fkey"
            columns: ["assigned_by"]
            isOneToOne: false
            referencedRelation: "tb_profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tb_assignment_id_doctor_fkey"
            columns: ["id_doctor"]
            isOneToOne: false
            referencedRelation: "tb_doctor"
            referencedColumns: ["id_doctor"]
          },
          {
            foreignKeyName: "tb_assignment_id_elderly_fkey"
            columns: ["id_elderly"]
            isOneToOne: false
            referencedRelation: "tb_elderly"
            referencedColumns: ["id_elderly"]
          },
        ]
      }
      tb_audit_log: {
        Row: {
          action: string
          created_at: string
          detail: string | null
          id_log: number
          id_profile: string | null
          ip_address: string | null
          request_id: string | null
          target_id: string | null
          target_table: string | null
          user_agent: string | null
        }
        Insert: {
          action: string
          created_at?: string
          detail?: string | null
          id_log?: number
          id_profile?: string | null
          ip_address?: string | null
          request_id?: string | null
          target_id?: string | null
          target_table?: string | null
          user_agent?: string | null
        }
        Update: {
          action?: string
          created_at?: string
          detail?: string | null
          id_log?: number
          id_profile?: string | null
          ip_address?: string | null
          request_id?: string | null
          target_id?: string | null
          target_table?: string | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tb_audit_log_id_profile_fkey"
            columns: ["id_profile"]
            isOneToOne: false
            referencedRelation: "tb_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      tb_chat_consult: {
        Row: {
          id_chat: number
          id_consult: number
          message: string
          send_at: string
          sender_role: Database["public"]["Enums"]["sender_role_enum"]
        }
        Insert: {
          id_chat?: number
          id_consult: number
          message: string
          send_at?: string
          sender_role: Database["public"]["Enums"]["sender_role_enum"]
        }
        Update: {
          id_chat?: number
          id_consult?: number
          message?: string
          send_at?: string
          sender_role?: Database["public"]["Enums"]["sender_role_enum"]
        }
        Relationships: [
          {
            foreignKeyName: "tb_chat_consult_id_consult_fkey"
            columns: ["id_consult"]
            isOneToOne: false
            referencedRelation: "tb_consult"
            referencedColumns: ["id_consult"]
          },
        ]
      }
      tb_consent: {
        Row: {
          consent_type: Database["public"]["Enums"]["consent_type_enum"]
          created_at: string
          granted_at: string
          granted_by: string
          id_consent: number
          id_elderly: number
          revoked_at: string | null
        }
        Insert: {
          consent_type: Database["public"]["Enums"]["consent_type_enum"]
          created_at?: string
          granted_at?: string
          granted_by: string
          id_consent?: number
          id_elderly: number
          revoked_at?: string | null
        }
        Update: {
          consent_type?: Database["public"]["Enums"]["consent_type_enum"]
          created_at?: string
          granted_at?: string
          granted_by?: string
          id_consent?: number
          id_elderly?: number
          revoked_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tb_consent_granted_by_fkey"
            columns: ["granted_by"]
            isOneToOne: false
            referencedRelation: "tb_profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tb_consent_id_elderly_fkey"
            columns: ["id_elderly"]
            isOneToOne: false
            referencedRelation: "tb_elderly"
            referencedColumns: ["id_elderly"]
          },
        ]
      }
      tb_consult: {
        Row: {
          consult_status: Database["public"]["Enums"]["consult_status_enum"]
          created_at: string
          id_consult: number
          id_doctor: number
          id_elderly: number
          id_health: number | null
          id_hospital: number
        }
        Insert: {
          consult_status?: Database["public"]["Enums"]["consult_status_enum"]
          created_at?: string
          id_consult?: number
          id_doctor: number
          id_elderly: number
          id_health?: number | null
          id_hospital: number
        }
        Update: {
          consult_status?: Database["public"]["Enums"]["consult_status_enum"]
          created_at?: string
          id_consult?: number
          id_doctor?: number
          id_elderly?: number
          id_health?: number | null
          id_hospital?: number
        }
        Relationships: [
          {
            foreignKeyName: "tb_consult_id_doctor_fkey"
            columns: ["id_doctor"]
            isOneToOne: false
            referencedRelation: "tb_doctor"
            referencedColumns: ["id_doctor"]
          },
          {
            foreignKeyName: "tb_consult_id_elderly_fkey"
            columns: ["id_elderly"]
            isOneToOne: false
            referencedRelation: "tb_elderly"
            referencedColumns: ["id_elderly"]
          },
          {
            foreignKeyName: "tb_consult_id_health_fkey"
            columns: ["id_health"]
            isOneToOne: false
            referencedRelation: "tb_health_record"
            referencedColumns: ["id_health"]
          },
        ]
      }
      tb_district: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          id: number
          name_en: string
          name_th: string
          province_id: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          id: number
          name_en: string
          name_th: string
          province_id: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          id?: number
          name_en?: string
          name_th?: string
          province_id?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tb_district_province_id_fkey"
            columns: ["province_id"]
            isOneToOne: false
            referencedRelation: "tb_province"
            referencedColumns: ["id"]
          },
        ]
      }
      tb_doctor: {
        Row: {
          created_at: string
          id_doctor: number
          id_hospital: number
          id_profile: string
          status: Database["public"]["Enums"]["profile_status_enum"]
        }
        Insert: {
          created_at?: string
          id_doctor?: number
          id_hospital: number
          id_profile: string
          status?: Database["public"]["Enums"]["profile_status_enum"]
        }
        Update: {
          created_at?: string
          id_doctor?: number
          id_hospital?: number
          id_profile?: string
          status?: Database["public"]["Enums"]["profile_status_enum"]
        }
        Relationships: [
          {
            foreignKeyName: "tb_doctor_id_profile_fkey"
            columns: ["id_profile"]
            isOneToOne: true
            referencedRelation: "tb_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      tb_elderly: {
        Row: {
          address: string | null
          birthday: string | null
          created_at: string
          disease: string | null
          gender: Database["public"]["Enums"]["gender_enum"] | null
          id_elderly: number
          id_profile: string
        }
        Insert: {
          address?: string | null
          birthday?: string | null
          created_at?: string
          disease?: string | null
          gender?: Database["public"]["Enums"]["gender_enum"] | null
          id_elderly?: number
          id_profile: string
        }
        Update: {
          address?: string | null
          birthday?: string | null
          created_at?: string
          disease?: string | null
          gender?: Database["public"]["Enums"]["gender_enum"] | null
          id_elderly?: number
          id_profile?: string
        }
        Relationships: [
          {
            foreignKeyName: "tb_elderly_id_profile_fkey"
            columns: ["id_profile"]
            isOneToOne: true
            referencedRelation: "tb_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      tb_elderly_relative: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          consent_health_data: boolean
          id_elderly: number
          id_profile: string
          id_relative: number
          relation: Database["public"]["Enums"]["relative_relation_enum"]
          request_at: string
          status: Database["public"]["Enums"]["relative_status_enum"]
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          consent_health_data?: boolean
          id_elderly: number
          id_profile: string
          id_relative?: number
          relation: Database["public"]["Enums"]["relative_relation_enum"]
          request_at?: string
          status?: Database["public"]["Enums"]["relative_status_enum"]
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          consent_health_data?: boolean
          id_elderly?: number
          id_profile?: string
          id_relative?: number
          relation?: Database["public"]["Enums"]["relative_relation_enum"]
          request_at?: string
          status?: Database["public"]["Enums"]["relative_status_enum"]
        }
        Relationships: [
          {
            foreignKeyName: "tb_elderly_relative_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "tb_profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tb_elderly_relative_id_elderly_fkey"
            columns: ["id_elderly"]
            isOneToOne: false
            referencedRelation: "tb_elderly"
            referencedColumns: ["id_elderly"]
          },
          {
            foreignKeyName: "tb_elderly_relative_id_profile_fkey"
            columns: ["id_profile"]
            isOneToOne: false
            referencedRelation: "tb_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      tb_emergency: {
        Row: {
          description: string | null
          emergency_time: string
          id_elderly: number
          id_emergency: number
          id_hospital: number
          latitude: number | null
          longitude: number | null
          refer_hospital_name: string | null
          reported_by: string
          status: Database["public"]["Enums"]["emergency_status_enum"]
          trigger_type: Database["public"]["Enums"]["emergency_trigger_type_enum"]
        }
        Insert: {
          description?: string | null
          emergency_time?: string
          id_elderly: number
          id_emergency?: number
          id_hospital: number
          latitude?: number | null
          longitude?: number | null
          refer_hospital_name?: string | null
          reported_by: string
          status?: Database["public"]["Enums"]["emergency_status_enum"]
          trigger_type: Database["public"]["Enums"]["emergency_trigger_type_enum"]
        }
        Update: {
          description?: string | null
          emergency_time?: string
          id_elderly?: number
          id_emergency?: number
          id_hospital?: number
          latitude?: number | null
          longitude?: number | null
          refer_hospital_name?: string | null
          reported_by?: string
          status?: Database["public"]["Enums"]["emergency_status_enum"]
          trigger_type?: Database["public"]["Enums"]["emergency_trigger_type_enum"]
        }
        Relationships: [
          {
            foreignKeyName: "tb_emergency_id_elderly_fkey"
            columns: ["id_elderly"]
            isOneToOne: false
            referencedRelation: "tb_elderly"
            referencedColumns: ["id_elderly"]
          },
          {
            foreignKeyName: "tb_emergency_reported_by_fkey"
            columns: ["reported_by"]
            isOneToOne: false
            referencedRelation: "tb_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      tb_emergency_relative: {
        Row: {
          channel: Database["public"]["Enums"]["notify_channel_enum"]
          fallback_used: boolean
          id_emergency: number
          id_notify: number
          id_profile: string
          notify_at: string
          status: Database["public"]["Enums"]["notify_status_enum"]
        }
        Insert: {
          channel: Database["public"]["Enums"]["notify_channel_enum"]
          fallback_used?: boolean
          id_emergency: number
          id_notify?: number
          id_profile: string
          notify_at?: string
          status?: Database["public"]["Enums"]["notify_status_enum"]
        }
        Update: {
          channel?: Database["public"]["Enums"]["notify_channel_enum"]
          fallback_used?: boolean
          id_emergency?: number
          id_notify?: number
          id_profile?: string
          notify_at?: string
          status?: Database["public"]["Enums"]["notify_status_enum"]
        }
        Relationships: [
          {
            foreignKeyName: "tb_emergency_relative_id_emergency_fkey"
            columns: ["id_emergency"]
            isOneToOne: false
            referencedRelation: "tb_emergency"
            referencedColumns: ["id_emergency"]
          },
          {
            foreignKeyName: "tb_emergency_relative_id_profile_fkey"
            columns: ["id_profile"]
            isOneToOne: false
            referencedRelation: "tb_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      tb_geo: {
        Row: {
          id: number
          name_th: string
        }
        Insert: {
          id: number
          name_th: string
        }
        Update: {
          id?: number
          name_th?: string
        }
        Relationships: []
      }
      tb_health_record: {
        Row: {
          bp_classification:
            | Database["public"]["Enums"]["bp_classification_enum"]
            | null
          created_at: string
          detail: string | null
          dia: number
          entry_channel: Database["public"]["Enums"]["entry_channel_enum"]
          heart: number | null
          height: number | null
          id_elderly: number
          id_health: number
          llm_summary: string | null
          recorded_by: string | null
          sys: number
          weight: number | null
        }
        Insert: {
          bp_classification?:
            | Database["public"]["Enums"]["bp_classification_enum"]
            | null
          created_at?: string
          detail?: string | null
          dia: number
          entry_channel?: Database["public"]["Enums"]["entry_channel_enum"]
          heart?: number | null
          height?: number | null
          id_elderly: number
          id_health?: number
          llm_summary?: string | null
          recorded_by?: string | null
          sys: number
          weight?: number | null
        }
        Update: {
          bp_classification?:
            | Database["public"]["Enums"]["bp_classification_enum"]
            | null
          created_at?: string
          detail?: string | null
          dia?: number
          entry_channel?: Database["public"]["Enums"]["entry_channel_enum"]
          heart?: number | null
          height?: number | null
          id_elderly?: number
          id_health?: number
          llm_summary?: string | null
          recorded_by?: string | null
          sys?: number
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tb_health_record_id_elderly_fkey"
            columns: ["id_elderly"]
            isOneToOne: false
            referencedRelation: "tb_elderly"
            referencedColumns: ["id_elderly"]
          },
          {
            foreignKeyName: "tb_health_record_recorded_by_fkey"
            columns: ["recorded_by"]
            isOneToOne: false
            referencedRelation: "tb_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      tb_hospital: {
        Row: {
          address: string | null
          create_at: string | null
          delete_at: string | null
          hospital_code: string | null
          hospital_name: string
          id_hospital: number
          moph_hcode: string | null
          phone: string | null
          subdistrict_id: number | null
          update_at: string | null
        }
        Insert: {
          address?: string | null
          create_at?: string | null
          delete_at?: string | null
          hospital_code?: string | null
          hospital_name: string
          id_hospital?: number
          moph_hcode?: string | null
          phone?: string | null
          subdistrict_id?: number | null
          update_at?: string | null
        }
        Update: {
          address?: string | null
          create_at?: string | null
          delete_at?: string | null
          hospital_code?: string | null
          hospital_name?: string
          id_hospital?: number
          moph_hcode?: string | null
          phone?: string | null
          subdistrict_id?: number | null
          update_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tb_hospital_subdistrict_id_fkey"
            columns: ["subdistrict_id"]
            isOneToOne: false
            referencedRelation: "tb_subdistrict"
            referencedColumns: ["id"]
          },
        ]
      }
      tb_profile: {
        Row: {
          auth_channel: Database["public"]["Enums"]["auth_channel_enum"]
          citizen_id: string | null
          created_at: string
          email: string | null
          id: string
          id_hospital: number | null
          line_display_name: string | null
          line_picture_url: string | null
          line_user_id: string | null
          name: string
          role: Database["public"]["Enums"]["role_enum"]
          status: Database["public"]["Enums"]["profile_status_enum"]
          surname: string
          tel: string | null
        }
        Insert: {
          auth_channel: Database["public"]["Enums"]["auth_channel_enum"]
          citizen_id?: string | null
          created_at?: string
          email?: string | null
          id: string
          id_hospital?: number | null
          line_display_name?: string | null
          line_picture_url?: string | null
          line_user_id?: string | null
          name: string
          role?: Database["public"]["Enums"]["role_enum"]
          status?: Database["public"]["Enums"]["profile_status_enum"]
          surname: string
          tel?: string | null
        }
        Update: {
          auth_channel?: Database["public"]["Enums"]["auth_channel_enum"]
          citizen_id?: string | null
          created_at?: string
          email?: string | null
          id?: string
          id_hospital?: number | null
          line_display_name?: string | null
          line_picture_url?: string | null
          line_user_id?: string | null
          name?: string
          role?: Database["public"]["Enums"]["role_enum"]
          status?: Database["public"]["Enums"]["profile_status_enum"]
          surname?: string
          tel?: string | null
        }
        Relationships: []
      }
      tb_province: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          geo_id: number
          id: number
          name_en: string
          name_th: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          geo_id: number
          id: number
          name_en: string
          name_th: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          geo_id?: number
          id?: number
          name_en?: string
          name_th?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tb_province_geo_id_fkey"
            columns: ["geo_id"]
            isOneToOne: false
            referencedRelation: "tb_geo"
            referencedColumns: ["id"]
          },
        ]
      }
      tb_question: {
        Row: {
          created_at: string
          id_assessment: number
          id_question: number
          question_no: number
          question_text: string
          status: Database["public"]["Enums"]["assessment_status_enum"]
        }
        Insert: {
          created_at?: string
          id_assessment: number
          id_question?: number
          question_no: number
          question_text: string
          status?: Database["public"]["Enums"]["assessment_status_enum"]
        }
        Update: {
          created_at?: string
          id_assessment?: number
          id_question?: number
          question_no?: number
          question_text?: string
          status?: Database["public"]["Enums"]["assessment_status_enum"]
        }
        Relationships: [
          {
            foreignKeyName: "tb_question_id_assessment_fkey"
            columns: ["id_assessment"]
            isOneToOne: false
            referencedRelation: "tb_assessment"
            referencedColumns: ["id_assessment"]
          },
        ]
      }
      tb_subdistrict: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          district_id: number
          id: number
          lat: number | null
          lng: number | null
          name_en: string
          name_th: string
          updated_at: string | null
          zip_code: string | null
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          district_id: number
          id: number
          lat?: number | null
          lng?: number | null
          name_en: string
          name_th: string
          updated_at?: string | null
          zip_code?: string | null
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          district_id?: number
          id?: number
          lat?: number | null
          lng?: number | null
          name_en?: string
          name_th?: string
          updated_at?: string | null
          zip_code?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tb_subdistrict_district_id_fkey"
            columns: ["district_id"]
            isOneToOne: false
            referencedRelation: "tb_district"
            referencedColumns: ["id"]
          },
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
      appointment_status_enum: "WAITING" | "DONE" | "CANCEL"
      assessment_category_enum: "PHYSICAL" | "MENTAL" | "BRAIN" | "FOOD"
      assessment_result_level_enum: "NORMAL" | "WATCH" | "REFER"
      assessment_status_enum: "ACTIVE" | "INACTIVE"
      assignment_status_enum: "ACTIVE" | "INACTIVE"
      auth_channel_enum: "LOCAL" | "LINE"
      bp_classification_enum:
        | "OPTIMAL"
        | "NORMAL"
        | "HIGH_NORMAL"
        | "HT_GRADE_1"
        | "HT_GRADE_2"
        | "HT_GRADE_3"
      consent_type_enum: "SHARE_TO_RELATIVE"
      consult_status_enum: "ACTIVE" | "CLOSED"
      emergency_status_enum: "ACTIVE" | "REFERRING" | "CLOSED"
      emergency_trigger_type_enum: "MANUAL" | "AUTO_BP"
      entry_channel_enum: "SELF" | "ASSISTED"
      gender_enum: "M" | "F"
      notify_channel_enum: "LINE" | "SMS"
      notify_status_enum: "SENT" | "READ" | "FAILED"
      profile_status_enum: "ACTIVE" | "INACTIVE"
      relative_relation_enum:
        | "CHILD"
        | "GRANDCHILD"
        | "SIBLING"
        | "SPOUSE"
        | "RELATIVE"
      relative_status_enum: "PENDING" | "APPROVED" | "REJECTED"
      role_enum:
        | "SYSTEM_ADMIN"
        | "HOSPITAL_OFFICER"
        | "DOCTOR"
        | "ELDERLY"
        | "RELATIVE"
      sender_role_enum: "elderly" | "doctor"
      status_active_enum: "ACTIVE" | "INACTIVE"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      appointment_status_enum: ["WAITING", "DONE", "CANCEL"],
      assessment_category_enum: ["PHYSICAL", "MENTAL", "BRAIN", "FOOD"],
      assessment_result_level_enum: ["NORMAL", "WATCH", "REFER"],
      assessment_status_enum: ["ACTIVE", "INACTIVE"],
      assignment_status_enum: ["ACTIVE", "INACTIVE"],
      auth_channel_enum: ["LOCAL", "LINE"],
      bp_classification_enum: [
        "OPTIMAL",
        "NORMAL",
        "HIGH_NORMAL",
        "HT_GRADE_1",
        "HT_GRADE_2",
        "HT_GRADE_3",
      ],
      consent_type_enum: ["SHARE_TO_RELATIVE"],
      consult_status_enum: ["ACTIVE", "CLOSED"],
      emergency_status_enum: ["ACTIVE", "REFERRING", "CLOSED"],
      emergency_trigger_type_enum: ["MANUAL", "AUTO_BP"],
      entry_channel_enum: ["SELF", "ASSISTED"],
      gender_enum: ["M", "F"],
      notify_channel_enum: ["LINE", "SMS"],
      notify_status_enum: ["SENT", "READ", "FAILED"],
      profile_status_enum: ["ACTIVE", "INACTIVE"],
      relative_relation_enum: [
        "CHILD",
        "GRANDCHILD",
        "SIBLING",
        "SPOUSE",
        "RELATIVE",
      ],
      relative_status_enum: ["PENDING", "APPROVED", "REJECTED"],
      role_enum: [
        "SYSTEM_ADMIN",
        "HOSPITAL_OFFICER",
        "DOCTOR",
        "ELDERLY",
        "RELATIVE",
      ],
      sender_role_enum: ["elderly", "doctor"],
      status_active_enum: ["ACTIVE", "INACTIVE"],
    },
  },
} as const
