import AsyncStorage from '@react-native-async-storage/async-storage';
import { Department } from '../models/Department';

// Define a prefix for department keys to distinguish them from other AsyncStorage keys
const DEPARTMENT_PREFIX = 'department_';

export const StorageService = {
    async saveDepartment(department: Department): Promise<void> {
        try {
            const key = DEPARTMENT_PREFIX + department.id; // Use a unique identifier for each department
            const jsonValue = JSON.stringify(department);
            await AsyncStorage.setItem(key, jsonValue);
        } catch (error) {
            console.error('Error saving department:', error);
        }
    },

    async getDepartment(id: string): Promise<Department | null> {
        try {
            const key = DEPARTMENT_PREFIX + id;
            const jsonValue = await AsyncStorage.getItem(key);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (error) {
            console.error('Error getting department:', error);
            return null;
        }
    },

    async getAllDepartments(): Promise<Department[]> {
        try {
            // Retrieve all keys from AsyncStorage
            const keys = await AsyncStorage.getAllKeys();
            // Filter out department keys
            const departmentKeys = keys.filter(key => key.startsWith(DEPARTMENT_PREFIX));

            // Retrieve department objects for each department key
            const departments: Department[] = [];
            for (const key of departmentKeys) {
                const jsonValue = await AsyncStorage.getItem(key);
                if (jsonValue) {
                    const department = JSON.parse(jsonValue) as Department;
                    departments.push(department);
                }
            }

            return departments;
        } catch (error) {
            console.error('Error getting all departments:', error);
            return [];
        }
    },

    async deleteDepartment(id: string): Promise<void> {
        try {
            const key = DEPARTMENT_PREFIX + id;
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.error('Error deleting department:', error);
        }
    },

    async deleteAllDepartments(): Promise<void> {
        try {
            // Retrieve all keys from AsyncStorage
            const keys = await AsyncStorage.getAllKeys();
            // Filter out department keys
            const departmentKeys = keys.filter(key => key.startsWith(DEPARTMENT_PREFIX));

            // Delete each department key
            await AsyncStorage.multiRemove(departmentKeys);
        } catch (error) {
            console.error('Error deleting all departments:', error);
        }
    }

};
