import { Container } from "@/components/Container";
import { Input } from "@/components/Input";

export function LoginForm() {
  return (
    <div className="pt-20 pb-30">
      <Container className="w-full sm:w-150 ">
        <div className="grid grid-cols-1 gap-5 shadow-2xl rounded-3xl p-8">
          <h1 className="text-4xl tracking-[2px] text-center mb-1">Sign In</h1>
          <button>Continue with Google</button>

          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-neutral-200"></div>
            <span className="text-xs text-neutral-500">OR</span>
            <div className="h-px flex-1 bg-neutral-200"></div>
          </div>

          <form className="grid grid-cols-1 gap-5">
            <div className="flex flex-col relative">
              <Input
                type="email"
                placeholder="Email"
                className="bg-[#f2f2f2] py-3 px-2 rounded-xl outline-none"
              />
            </div>
            <div className="flex flex-col relative">
              <input
                type="password"
                placeholder="Password"
                className="bg-[#f2f2f2] py-3 px-2 rounded-xl outline-none"
              />
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
