import {memo, useEffect} from 'react'
import { Switch } from '@headlessui/react'

interface IProps {
    enabledDark: boolean
    setEnabledDark: (value: boolean) => void
}

export const DarkMod = memo(({enabledDark, setEnabledDark} : IProps) => {

    useEffect(() => {
    if (enabledDark) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
    }, [enabledDark]);

    return (
    <div>
        <Switch
        checked={enabledDark}
        onChange={setEnabledDark}
        className={`${enabledDark ? 'bg-white' : 'bg-black'}
            relative inline-flex h-[30px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
        >
        <span className="sr-only">Use setting</span>
        <span
            aria-hidden="true"
            className={`${enabledDark ? 'translate-x-[30px]' : 'translate-x-0'}
            pointer-events-none inline-block h-[26px] w-[26px] transform rounded-full ${enabledDark ? "bg-black": "bg-white"} shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
        </Switch>
    </div>
)
})