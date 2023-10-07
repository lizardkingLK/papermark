import Spinner from "@/components/ui/loader";
import DocumentView from "@/components/view/document-view";
import { useDomainLink } from "@/lib/swr/use-link";

export default function ViewPage() {
  const { link, error } = useDomainLink();

  if (!link) {
    return <Spinner />;
  }

  return <DocumentView link={link} error={error} />;
}
