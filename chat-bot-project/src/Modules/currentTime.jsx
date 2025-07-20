import dayjs from 'dayjs'


export function getCurrentTime(){
        const time = dayjs().valueOf();
        return dayjs(time).format('h:mma');
}