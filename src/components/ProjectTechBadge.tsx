type ProjectTechBadgeProps = {
    label: string;
};

export default function ProjectTechBadge({ label }: ProjectTechBadgeProps) {
    return (
        <>
            <div className='text-center border border-[#A1A1AA] rounded-full text-[#A1A1AA] text-sm max-h-10 px-3 py-1'>{label}</div>
        </>
    );
}
