"use client"

import { SearchIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"

import * as z from "zod"
import { Field, FieldError } from "./ui/field"

const formSchema = z.object({
  title: z.string().trim().min(1, "Digite algo para buscar."),
})

const Search = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  })

  const router = useRouter()

  const onHandleSubmit = (data: z.infer<typeof formSchema>) => {
    router.push(`/barbershops?title=${data.title}`)
  }

  return (
    <>
      <form
        onSubmit={form.handleSubmit(onHandleSubmit)}
        className="flex w-full gap-2"
      >
        <Controller
          name="title"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                placeholder="Faça sua busca..."
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Button className="cursor-pointer" type="submit">
          <SearchIcon />
        </Button>
      </form>
    </>
  )
}

export default Search
