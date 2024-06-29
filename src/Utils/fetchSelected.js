export const fetchSelected = async(API, query) =>
{
    const res = await fetch(`${API}?${query.toString()}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      return res.json()
}


