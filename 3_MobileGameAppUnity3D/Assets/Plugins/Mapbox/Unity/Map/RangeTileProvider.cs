namespace Mapbox.Unity.Map
{
	using UnityEngine;
	using Mapbox.Map;

	public class RangeTileProvider : AbstractTileProvider
	{
		[SerializeField]
		private int _west = 0;
		[SerializeField]
		private int _north = 0;
		[SerializeField]
		private int _east = 0;
		[SerializeField]
		private int _south = 0;

		public override void OnInitialized()
		{
			var centerTile = TileCover.CoordinateToTileId(_map.CenterLatitudeLongitude, _map.AbsoluteZoom);
			AddTile(new UnwrappedTileId(_map.AbsoluteZoom, centerTile.X, centerTile.Y));
			for (int x = (int)(centerTile.X - _west); x <= (centerTile.X + _east); x++)
			{
				for (int y = (int)(centerTile.Y - _north); y <= (centerTile.Y + _south); y++)
				{
					AddTile(new UnwrappedTileId(_map.AbsoluteZoom, x, y));
				}
			}
		}
	}
}
