'use client'
import { useAuthStore } from '@store'
import type { Paths, Permissions } from '@types'
import { permissionsUrls } from '@constants'

export function usePermissions() {
  const { data } = useAuthStore()
  const checkHasPermission = (permission: Permissions) => {
    const permissions = data.user.permissions

    return permissions.includes(permission)
  }
  const checkPermissionPerUrl = (path: Paths) => {
    const permission = permissionsUrls[path] as unknown as Permissions

    const notHasPermissionToThisUrl = permission === undefined
    return checkHasPermission(permission) || notHasPermissionToThisUrl
  }

  return {
    checkHasPermission,
    checkPermissionPerUrl,
  }
}
