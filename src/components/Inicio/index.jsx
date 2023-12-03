import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const index = () => {
  return (
    <>
   <div className="relative overflow-hidden bg-gray-800">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-9 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-white sm:text-6xl">
              La Aplicación del Tiempo que buscabas
            </h1>
            <p className="mt-9 text-xl text-white">
                Selecciona cualquier ciudad del mundo y averigua el clima
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://imgs.search.brave.com/IHhVN0SB2bLJIDPblI3pyU9mhkzb_G8S_xL957uEC2g/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/b1VvbEstUFhUZm1Q/b3JRbVRCR253SGFF/SyZwaWQ9QXBp"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://imgs.search.brave.com/wuwE5WwWpDrqAysuWMaVHUXYZlIT8qtYMC2AGbvJbtM/rs:fit:715:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5P/ZTdjMlRZWEhwOEdZ/Vy12MHlHNGFnSGFF/NiZwaWQ9QXBp"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://imgs.search.brave.com/rsvw8JyldUwfKwikOfoimyFqWlO5Kf9WiIFgcNcLwHo/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5I/R0x0UU1DVkZReWxQ/b0xuRFhybUVRSGFF/SyZwaWQ9QXBp"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://imgs.search.brave.com/vF_8K6NsQ6WFDSulanqHkFr5eO244ss6NDxfg5tXZrI/rs:fit:316:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC42/MXN2cjVnS3JJNEcy/VF8zV01NYjVRQUFB/QSZwaWQ9QXBp"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://imgs.search.brave.com/y_G8-yUKKjIhasa3Go4J4aI6obxfQ0PkHHwzbl06mJQ/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4w/ZmgwUW4zQUR0UldR/WjlQS1NYOFV3SGFF/OCZwaWQ9QXBp"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://imgs.search.brave.com/zoxjRIw-7hbyKSp9J5EN8Sy13TMKy3pLoRjCYf13SuA/rs:fit:715:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4y/NkQxRDRMVi1uS2Jm/Sy12SjRyRmVRSGFF/NiZwaWQ9QXBp"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://imgs.search.brave.com/3-zVCc5HrbV8c-3qshZgonrcS1F-StWu_pQEaQgw1d4/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5T/VXpUQnZ2VTMzMXNW/X0Zzb3kyRVF3SGFF/SyZwaWQ9QXBp"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <NavLink as = {Link} to="/Panel"
                className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
              >
                INGRESAR
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default index
