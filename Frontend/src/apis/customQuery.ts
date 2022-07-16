import axios, { AxiosResponse } from 'axios'
import { useQuery, UseQueryOptions, UseQueryReturnType } from 'vue-query'
import { MaybeRef } from 'vue-query/lib/vue/types'
import client from './client'

interface Response<Data=any> {
  data: Data
}

interface ErrorResponse {
  code: number
  message: string | Object
  status: string
}

export interface Query {
  getEmployees: {
    url: "/employees/list";
    method: "get";
    response: {
      count: number;
      employees: {
        id: number;
        name: string;
        email: string;
        gender: string;
        placeOfBirth: string;
        dateOfBirth: string;
        marriageStatus: boolean;
        photo: string | null;
        address: string | null;
        createdAt: string;
        updatedAt: string;
        schools: {
          id: number;
          name: string;
          level: string;
          schoolId: number;
          graduateYear: number;
        }[];
        roles: any[];
        teams: { name: string; role: string }[];
      }[];
    };
    params: MaybeRef<any> | null;
    query:
      | MaybeRef<{
          name?: string;
          gender?: "MALE" | "FEMALE";
        }>
      | any;
  };
  getEmployee: {
    url: "/employees";
    method: "get";
    response: {
      id: number;
      name: string;
      email: string;
      handphone: string;
      officeEmail: string;
      officeEmailPassword: string;
      startWork: string | null;
      endWork: string | null;
      gender: "MALE" | "FEMALE";
      placeOfBirth: string;
      dateOfBirth: string;
      marriageStatus: boolean;
      photo: string;
      address: string;
      createdAt: string;
      updatedAt: string;
      status: string;
      schools: {
        id: number;
        name: string;
        level: "tk" | "sd" | "smp" | "sma" | "pts" | "ptn";
        schoolId: number;
        graduateYear: number;
      }[];
      roles: { name: string; id: number }[];
      teams: { role: string; roleId: number; team: string; teamId: number }[];
      activities: {
        id: number;
        name: string;
        photo: string | null;
        startDate: string;
        endDate: string | null;
        venue: string;
        status: string;
      }[];
    } | null;
    params: MaybeRef<number>;
    query: MaybeRef<any>;
  };
  getSchools: {
    url: "/schools/list";
    method: "get";
    response: {
      id: number;
      name: string;
      level: "tk" | "sd" | "smp" | "sma" | "pts" | "ptn";
      address: string;
      createdAt: string;
      updatedAt: string;
    }[];
    params: null;
    query: MaybeRef<{
      limit?: number;
      name?: string;
      level?: "tk" | "sd" | "smp" | "sma" | "pts" | "ptn";
    }>;
  };
  getRoles: {
    url: "/roles/list";
    method: "get";
    response: {
      createdAt: string;
      detail: string;
      id: number;
      name: string;
      updatedAt: string;
      employees: { employeeId: number; name: string }[];
    }[];
    params: null;
    query: MaybeRef<any>;
  };
  getTeams: {
    url: "/teams/list";
    method: "get";
    response: {
      address: string;
      code: string;
      id: number;
      image: string | null;
      name: string;
      _count: { employees: number };
    }[];
    params: null;
    query: MaybeRef<any>;
  };
  getTeam: {
    url: "/teams";
    method: "get";
    response: {
      id: number;
      name: string;
      code: string;
      address: string;
      image: string | null;
      employees:
        | {
            employeeCode: string;
            id: number;
            employee: {
              id: number;
              name: string;
              photo: string | null;
            };
            role: {
              id: number;
              name: string;
            };
          }[]
        | null;
    };
    params: MaybeRef<number>;
    query: MaybeRef<any>;
  };
  getActivities: {
    url: "/activities/list";
    method: "get";
    response: {
      detail: string;
      endDate: string | null;
      id: number;
      name: string;
      photo: string | null;
      startDate: string | null;
      status: string;
      venue: string;
    }[];
    params: MaybeRef<any>;
    query: MaybeRef<any>;
  };
  getActivity: {
    url: "/activities";
    method: "get";
    response: {
      detail: string;
      endDate: string | null;
      id: number;
      name: string;
      photo: string | null;
      startDate: string | null;
      status: string;
      venue: string;
      employees: {
        name: string;
        id: number;
        photo: string | null;
      }[];
    } | null;
    params: MaybeRef<number>;
    query: MaybeRef<any>;
  };
  getParticipants: {
    url: "/participants/activities";
    method: "get";
    response: {
      id: number;
      name: string;
      photo: string | null;
    }[];
    params: MaybeRef<any | any[]>;
    query: MaybeRef<any | any[]>;
  };
  getUserInfo: {
    url: "/users/info";
    method: "get";
    response: {
      createdAt: string;
      email: string;
      id: number;
      picture: string;
      username: string;
      centerSheetId: string;
      googleCredential: string;
    };
    params: MaybeRef<any>;
    query: MaybeRef<any>;
  };
}

type QueryOptions<T> = UseQueryOptions<T, ErrorResponse>

export function useCQuery<K extends keyof Query, T extends Query>(mode: K, url: T[K]['url'], method: T[K]['method'], params?: T[K]['params'], query?: T[K]['query'], options?: QueryOptions<Response<T[K]['response']>>): UseQueryReturnType<Response<T[K]['response']>, ErrorResponse> {
  return useQuery<Response<T[K]["response"]>, ErrorResponse, Response<T[K]["response"]>, any>({
    queryKey: [mode, params, query],
    queryFn: async ({ queryKey }: { queryKey: any }) => {
      try {
        let uri = url as string
        if (queryKey[1]) {
          uri = url + '/' + queryKey[1]
        }
        const res: AxiosResponse<Response<T[K]['response']>, any> = await client({ url: uri, method, params: queryKey[2] })
        return res.data
      } catch (e) {
        if (axios.isAxiosError(e)) {
          throw e.response?.data
        }
        throw {
          message: 'unpredictable error occurred!',
          code: 500,
          status: 'internal server error'
        }
      }
    },
    ...options
  })
}
