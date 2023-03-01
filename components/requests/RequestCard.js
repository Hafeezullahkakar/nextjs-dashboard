
import { useRouter  } from "next/router";

function RequestCard() {
  const router = useRouter()

  return (
    <div className="card w-60 h-72 glass shadow-xl p-0">
      <figure>
        <img
          src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"
          alt="nft!"
        />
      </figure>
      <div className="card-body p-2 flex px-3">
        <h6 className="card-title text-lg text-black">Flat NFT</h6>
        <p className="text-xs text-slate-900">This is flat of NFT that is to be created and generated and listed</p>
        <div className="card-actions justify-center">
          <p className="btn btn-primary">Verify details</p>
        </div>
      </div>
    </div>
  );
}

export default RequestCard;
