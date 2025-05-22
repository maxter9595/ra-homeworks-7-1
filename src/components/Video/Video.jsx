import { PrettyDateTime } from '../DateTime';

export function Video(props) {
    return (
        <div className="video">
            <iframe 
                src={props.url} 
                frameBorder="0" 
                allow="autoplay; encrypted-media" 
                allowFullScreen
                title="Video player"
            ></iframe>
            <PrettyDateTime date={props.date} />
        </div>
    )
}
