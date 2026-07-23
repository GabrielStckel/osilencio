DROP POLICY IF EXISTS "Anyone can submit a lead" ON public.leads;

CREATE POLICY "Public lead submission with validation"
ON public.leads
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(nome)) BETWEEN 2 AND 120
  AND length(btrim(email)) BETWEEN 5 AND 200
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(btrim(whatsapp)) BETWEEN 8 AND 40
  AND variante IN ('a','b','A','B')
  AND integracao_status = 'pending'
  AND integracao_erro IS NULL
);