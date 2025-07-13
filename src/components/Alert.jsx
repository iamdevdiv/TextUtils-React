export const Alert = (props) => {
    return (
        props.alert && <div className={
                `flex items-center p-4 mb-4 text-sm border rounded-lg bg-green-50 dark:bg-gray-800 w-5/6 mx-auto my-4
                ${
                    props.alert.type === "Success" ? "text-green-800 border-green-300 dark:text-green-400 dark:border-green-800" :
                    props.alert.type === "Info" ? "text-blue-800 border-blue-300 dark:text-blue-400 dark:border-blue-800" :
                    props.alert.type === "Danger" ? "text-red-800 border-red-300 dark:text-red-400 dark:border-red-800" :
                    props.alert.type === "Warning" ? "text-yellow-800 border-yellow-300 dark:text-yellow-300 dark:border-yellow-800" : "text-gray-800 border-gray-300 dark:text-gray-300 dark:border-gray-600"
                }`
            } role="alert">
            <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">{props.alert.text !== "Dark" ? props.alert.text + "!" : "Alert"}</span>
            <div>
                <span className="font-medium">{props.alert.type !== "Dark" ? props.alert.type + "!" : ""}</span> {props.alert.text}
            </div>
        </div>
    )
}
