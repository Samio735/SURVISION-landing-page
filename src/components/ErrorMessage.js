function ErrorMessage(props) {
    return(
        <h1 className="text-rose-100 bg-red-500
          px-4 py-1 rounded-lg me-10">{props.message}</h1>
    )
}

export default ErrorMessage