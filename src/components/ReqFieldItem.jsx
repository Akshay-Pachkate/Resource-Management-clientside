/* eslint-disable react/prop-types */


const ReqFieldItem = ({label, value, className}) => {
    return (
        <div className={'relative border border-gray-600 px-4 py-2 max-sm:px-2 max-sm:py-1 sm:max-md:py-[6px] sm:max-md:px-3 rounded-md ' + className}>
            <label className='absolute -top-4 leading-tight bg-gray-100 text-lg px-2 max-sm:px-1   text-gray-600 max-sm:text-base sm:max-md:text-base' >
                {label}
            </label>
            <h1 className="mt-1 text-xl font-[400] text-gray-800 truncate max-sm:text-base">{value}</h1>
        </div>
      )
}

export default ReqFieldItem