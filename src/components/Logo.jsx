import logo from '@/images/fox.png'
export function Logomark(props) {
  return (
      <img src={logo.src} width="40" height="40"/>
  )
}

export function Logo(props) {
  return (
      <div className="flex items-center text-gray-900">
          <Logomark className="h-10 w-10 flex-none" />
          <div className="ml-4">
              <p className="text-2xl font-bold ">QuantFox</p>
          </div>
      </div>
  )
}
