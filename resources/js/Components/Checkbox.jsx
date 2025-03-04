export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-stone-700 text-yellow-600 shadow-sm focus:ring-stone-900 ' +
                className
            }
        />
    );
}
