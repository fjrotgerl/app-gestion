interface SeparatorProps {
    position?: string
}

export const Separator: React.FC<SeparatorProps> = ({
    position = "horizontal"
}) => {
    if (position === 'horizontal') {
        return (
            <div className={`w-full h-1 bg-neutral-300`}></div>
        )
    } if (position === 'vertical') {
        return (
            <div className={`h-full w-[0.5px] bg-neutral-300`}></div>
        )
    }
    return null
}
