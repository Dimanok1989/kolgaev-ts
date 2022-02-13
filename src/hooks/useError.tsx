import { AxiosError } from "axios";

interface HookError {
    message: null | string;
    status: null | number;
    statusText: null | string;
    type?: string;
}

export const useError = (error: AxiosError) => {

    const errors: HookError = {
        message: null,
        status: null,
        statusText: null,
    }

    if (error.response) {
        errors.message = error.response?.data?.message || error.response.statusText;
        errors.status = error.response?.status || 0;
        errors.statusText = error.response?.statusText || null;
    } else if (error.request) {
        errors.message = "Ошибка запроса";
        errors.status = 0;
    } else {
        errors.message = error.message || "Неизвестная ошибка";
    }

    return errors;
}