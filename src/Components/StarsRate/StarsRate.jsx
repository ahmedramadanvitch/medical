import { StarIcon } from "@heroicons/react/24/solid";

function StarsRate() {
  return (
    <div className="flex justify-center items-center flex-wrap gap-1 my-3">
      <StarIcon className="h-5 w-5 text-yellow-900" />
      <StarIcon className="h-5 w-5 text-yellow-900" />
      <StarIcon className="h-5 w-5 text-yellow-900" />
      <StarIcon className="h-5 w-5 text-yellow-900" />
      <StarIcon className="h-5 w-5 text-yellow-900" />
    </div>
  );
}

export default StarsRate;
