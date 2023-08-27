import React from 'react';
import * as FeatherIcons from 'react-feather';

export type IconTypeT='feather'|'material';
export type FeatherIconType= keyof typeof FeatherIcons;
interface PrIconFeatherProps {
    name:FeatherIconType;
    size?: number;
    color?: string;
    className?: string;
    onClick?: () => void;
}

const PrIcon: React.FC<PrIconFeatherProps> = ({ name, size = 24, color = 'currentColor', className, onClick }) => {
    const FeatherIcon = FeatherIcons[name];

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <FeatherIcon
            size={size}
            color={color}
            className={className}
            onClick={onClick ? handleClick : undefined}
        />
    );
};

export default PrIcon;
