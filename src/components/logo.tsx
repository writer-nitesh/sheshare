import application from "@/application.json";

export function Logo() {
    return (
        <a href="/">
            <img src={application.logo} className="h-10" alt={`${application.name}_logo`} />
        </a>
    )
}

export function LogoText() {
    return (
        <div className="flex gap-2 bg-red-300 items-center">
            <Logo />
            <h1>{application.name}</h1>
        </div>
    )
}
