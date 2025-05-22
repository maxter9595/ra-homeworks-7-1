import moment from 'moment';
import { DateTime } from './DateTime';

function formatTimeAgo(date) {
    const now = moment();
    const postDate = moment(date);
    const diffMinutes = now.diff(postDate, 'minutes');
    const diffHours = now.diff(postDate, 'hours');
    const diffDays = now.diff(postDate, 'days');

    if (diffMinutes < 60) {
        let minutes = diffMinutes;
        let word;
        if (minutes % 10 === 1 && minutes % 100 !== 11) {
            word = 'минуту';
        } else if ([2, 3, 4].includes(minutes % 10) && ![12, 13, 14].includes(minutes % 100)) {
            word = 'минуты';
        } else {
            word = 'минут';
        }
        return `${minutes} ${word} назад`;
    } else if (diffHours < 24) {
        let hours = diffHours;
        let word;
        if (hours % 10 === 1 && hours % 100 !== 11) {
            word = 'час';
        } else if ([2, 3, 4].includes(hours % 10) && ![12, 13, 14].includes(hours % 100)) {
            word = 'часа';
        } else {
            word = 'часов';
        }
        return `${hours} ${word} назад`;
    } else {
        let days = diffDays;
        let word;
        if (days % 10 === 1 && days % 100 !== 11) {
            word = 'день';
        } else if ([2, 3, 4].includes(days % 10) && ![12, 13, 14].includes(days % 100)) {
            word = 'дня';
        } else {
            word = 'дней';
        }
        return `${days} ${word} назад`;
    }
}

export function withDateTimePretty(Component) {
    return function (props) {
        const formattedDate = formatTimeAgo(props.date);
        return <Component {...props} date={formattedDate} />;
    }
}

export const PrettyDateTime = withDateTimePretty(DateTime);
