"use client";


import { useForm } from "react-hook-form";


export default function Page() {
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //   },
  // });
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data)=> console.log("formulario enviado", data));

  return (
    <div>
      <form onSubmit={onSubmit}  
      className="w-[400px] flex flex-col m-2 p-4 bg-gray-300">
        {/* nombre */}
        <label htmlFor="nombre" className="">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          className="border"
          {...register("nombre")}
        />
        {/* mail */}
        <label htmlFor="email">Correo</label>
        <input
          type="text"
          id="email"
          className="border"
          {...register("email")}
        />
        {/* password */}
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          className="border"
          {...register("password")}
        />
        {/* confirmar password */}
        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
        <input
          type="password"
          id="confirmPassword"
          className="border"
          {...register("confirmarPassword")}
        />
        {/* fechanaciemiento */}
        <label htmlFor="fechaNacimiento">Fecha Nacimiento</label>
        <input
          type="date"
          id="fechaNacimiento"
          className="border"
          {...register("fechaNacimiento")}
        />
        {/* pais */}
        <label htmlFor="pais">Pais</label>
        <select id="pais" {...register("pais")}>
          <option value="">Selecciona un país</option>
          <option value="es">España</option>
          <option value="us">Estados Unidos</option>
          <option value="fr">Francia</option>
          <option value="it">Italia</option>
          <option value="de">Alemania</option>
          <option value="uk">Argentina</option>
          <option value="jp">Japon</option>
          <option value="ar">Australia</option>
          <option value="cn">China</option>
          <option value="in">India</option>
          <option value="kr">Corea del Sur</option>
          <option value="br">Brasil</option>
          <option value="mx">México</option>
        </select>
        {/* file */}
        <label htmlFor="foto">Foto de perfil</label>
        <input type="file" {...register("foto")} />
        {/* terminos y condiciones */}
        <div>
          <input type="checkbox" {...register("terminos")} />
          <label htmlFor="terminos">Acepto terminos y condiciones</label>
        </div>
        {/* submit */}
        <button type="submit" className="mt-4 bg-blue-500 text-white border-2">
          Enviar
        </button>
      </form>
    </div>
  );
}
