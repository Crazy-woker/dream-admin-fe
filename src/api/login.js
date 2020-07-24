import service from "@/utils/request.js"

export function getSms() {
    return service.request({
        method: 'post',
        url: '/user/12345',
        data: {
            firstName: 'Fred',
            lastName: 'Flintstone'
        }
    })
}