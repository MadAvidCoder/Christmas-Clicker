import Snowfall from 'react-snowfall';

export default function SnowEffect() {
    return (
        <div className="fixed inset-0 z-50 pointer-events-none">
            <Snowfall
                snowflakeCount={150}
                color="#a0aec0"
                style={{ pointerEvents: 'none' }}
            />
        </div>
    )
}